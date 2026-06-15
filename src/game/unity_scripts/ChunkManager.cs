using System.Collections.Generic;
using UnityEngine;

public class ChunkManager : MonoBehaviour
{
    public Transform player;
    public float zSpawn = 0;
    public float chunkLength = 30f;
    public int numberOfChunks = 5;

    // We assume the tags map to our ObjectPooler setup
    public string[] chunkTags;

    private Queue<GameObject> activeChunks = new Queue<GameObject>();

    void Start()
    {
        for (int i = 0; i < numberOfChunks; i++)
        {
            if (i == 0)
                SpawnChunk("SafeChunk"); // Start with a safe chunk
            else
                SpawnChunk(chunkTags[Random.Range(0, chunkTags.Length)]);
        }
    }

    void Update()
    {
        // If the player has passed the trigger line, spawn a new chunk and recycle the old one
        if (player.position.z - chunkLength > zSpawn - (numberOfChunks * chunkLength))
        {
            SpawnChunk(chunkTags[Random.Range(0, chunkTags.Length)]);
            DeleteOldestChunk();
        }
    }

    public void SpawnChunk(string tag)
    {
        GameObject chunk = ObjectPooler.Instance.SpawnFromPool(tag, transform.forward * zSpawn, transform.rotation);
        activeChunks.Enqueue(chunk);
        zSpawn += chunkLength;
    }

    private void DeleteOldestChunk()
    {
        GameObject oldChunk = activeChunks.Dequeue();
        // The Object Pooler already enqueued it when spawning, we just disable it here
        oldChunk.SetActive(false);
    }
}
