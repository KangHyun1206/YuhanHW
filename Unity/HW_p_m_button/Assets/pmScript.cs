using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class pmScript : MonoBehaviour
{
    public TextMeshPro Text;
    public Button bt1, bt2;
    int num = 0;
    // Start is called before the first frame update
    void Start()
    {
        Text.text = "inputNum:" + num;
        bt1.onClick.AddListener(bt1print);
        bt2.onClick.AddListener(bt2print);
    }
    void bt1print()
    {
        num--;
    }
    void bt2print()
    {
        num++;
    }
    // Update is called once per frame
    void Update()
    {
        Text.text = "inputNum:" + num;
    }
}
