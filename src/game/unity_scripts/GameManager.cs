using UnityEngine;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;

    public PlayerController player;

    [Header("Game State")]
    public bool isGameOver = false;
    public float score = 0;
    public int coins = 0;

    [Header("Difficulty Curve")]
    public float baseSpeed = 10f;
    public float maxSpeed = 30f;
    public float speedIncreaseRate = 0.1f;

    [Header("UI References")]
    public Text scoreText;
    public Text coinsText;
    public GameObject gameOverPanel;

    private void Awake()
    {
        if (Instance == null)
            Instance = this;
        else
            Destroy(gameObject);
    }

    void Start()
    {
        player.forwardSpeed = baseSpeed;
    }

    void Update()
    {
        if (isGameOver)
            return;

        // Increase score based on speed
        score += Time.deltaTime * player.forwardSpeed;
        scoreText.text = "Score: " + Mathf.FloorToInt(score).ToString();

        // Increase difficulty/speed over time
        if (player.forwardSpeed < maxSpeed)
        {
            player.forwardSpeed += speedIncreaseRate * Time.deltaTime;
        }
    }

    public void AddCoin()
    {
        coins++;
        coinsText.text = "Coins: " + coins;
    }

    public void GameOver()
    {
        isGameOver = true;
        player.forwardSpeed = 0;
        player.enabled = false;
        gameOverPanel.SetActive(true);
        Debug.Log("Game Over! Final Score: " + Mathf.FloorToInt(score));
    }
}
