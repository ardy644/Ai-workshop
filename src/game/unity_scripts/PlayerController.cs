using UnityEngine;

public class PlayerController : MonoBehaviour
{
    private CharacterController controller;
    private Vector3 direction;

    [Header("Movement Settings")]
    public float forwardSpeed = 10f;
    public float laneDistance = 3f; // Distance between lanes
    public float laneChangeSpeed = 10f; // Speed of lerping between lanes

    [Header("Jump & Roll")]
    public float jumpForce = 8f;
    public float gravity = -20f;
    private bool isRolling = false;

    private int currentLane = 1; // 0 = Left, 1 = Middle, 2 = Right

    void Start()
    {
        controller = GetComponent<CharacterController>();
    }

    void Update()
    {
        // Continuous forward movement
        direction.z = forwardSpeed;

        // Gravity
        if (controller.isGrounded)
        {
            direction.y = -1; // Keep grounded

            if (Input.GetKeyDown(KeyCode.UpArrow))
            {
                Jump();
            }
        }
        else
        {
            direction.y += gravity * Time.deltaTime;
        }

        // Input handling for lanes
        if (Input.GetKeyDown(KeyCode.RightArrow))
        {
            MoveLane(1);
        }
        else if (Input.GetKeyDown(KeyCode.LeftArrow))
        {
            MoveLane(-1);
        }

        if (Input.GetKeyDown(KeyCode.DownArrow) && !isRolling)
        {
            StartCoroutine(Roll());
        }

        // Calculate lane target position
        Vector3 targetPosition = transform.position;
        if (currentLane == 0)
        {
            targetPosition.x = -laneDistance;
        }
        else if (currentLane == 1)
        {
            targetPosition.x = 0;
        }
        else if (currentLane == 2)
        {
            targetPosition.x = laneDistance;
        }

        // Move Player: Lerp X for snappy lane changes, direct movement for Z and Y
        Vector3 moveVector = Vector3.zero;
        moveVector.x = (targetPosition.x - transform.position.x) * laneChangeSpeed;
        moveVector.y = direction.y;
        moveVector.z = direction.z;

        controller.Move(moveVector * Time.deltaTime);
    }

    private void MoveLane(int direction)
    {
        currentLane += direction;
        currentLane = Mathf.Clamp(currentLane, 0, 2);
    }

    private void Jump()
    {
        direction.y = jumpForce;
    }

    private System.Collections.IEnumerator Roll()
    {
        isRolling = true;

        // Shrink collider
        controller.height = 1f;
        controller.center = new Vector3(0, 0.5f, 0);

        // Add fast fall if in air
        if (!controller.isGrounded)
        {
            direction.y -= jumpForce;
        }

        yield return new WaitForSeconds(0.8f);

        // Reset collider
        controller.height = 2f;
        controller.center = new Vector3(0, 1f, 0);
        isRolling = false;
    }

    private void OnControllerColliderHit(ControllerColliderHit hit)
    {
        if (hit.gameObject.CompareTag("Obstacle"))
        {
            GameManager.Instance.GameOver();
        }
    }
}
