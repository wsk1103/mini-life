package com.wsk.life.tool;

import java.io.*;
import java.util.*;

/**
 * @DESCRIPTION : 初始化敏感词库，将敏感词加入到HashMap中，构建DFA算法模型
 * @AUTHOR : sk
 * @TIME : 2018/3/4  16:56
 */
public class SensitiveWordInit {
    private static final String ENCODING = "GBK";    //字符编码
    private HashMap sensitiveWordMap;

    Map initKeyWord(){
        try {
            //读取敏感词库
            Set<String> keyWordSet = readSensitiveWordFile();
            //将敏感词库加入到HashMap中
            addSensitiveWordToHashMap(keyWordSet);
            //spring获取application，然后application.setAttribute("sensitiveWordMap",sensitiveWordMap);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return sensitiveWordMap;
    }

    /**
     * 读取敏感词库，将敏感词放入HashSet中，构建一个DFA算法模型：<br>
     * 中 = {
     *      isEnd = 0
     *      国 = {<br>
     *      	 isEnd = 1
     *           人 = {isEnd = 0
     *                民 = {isEnd = 1}
     *                }
     *           男  = {
     *           	   isEnd = 0
     *           		人 = {
     *           			 isEnd = 1
     *           			}
     *           	}
     *           }
     *      }
     *  五 = {
     *      isEnd = 0
     *      星 = {
     *      	isEnd = 0
     *      	红 = {
     *              isEnd = 0
     *              旗 = {
     *                   isEnd = 1
     *                  }
     *              }
     *      	}
     *      }
     * @param keyWordSet  敏感词库
     */
    private void addSensitiveWordToHashMap(Set<String> keyWordSet) {
        sensitiveWordMap = new HashMap(keyWordSet.size());     //初始化敏感词容器，减少扩容操作
        String key = null;
        Map nowMap = null;
        Map<String, String> newWorMap;
        //迭代keyWordSet
        for (String aKeyWordSet : keyWordSet) {
            key = aKeyWordSet;    //关键字
            nowMap = sensitiveWordMap;
            for (int i = 0; i < key.length(); i++) {
                char keyChar = key.charAt(i);       //转换成char型
                Object wordMap = nowMap.get(keyChar);       //获取

                if (wordMap != null) {        //如果存在该key，直接赋值
                    nowMap = (Map) wordMap;
                } else {     //不存在则，则构建一个map，同时将isEnd设置为0，因为他不是最后一个
                    newWorMap = new HashMap<String, String>();
                    newWorMap.put("isEnd", "0");     //不是最后一个
                    nowMap.put(keyChar, newWorMap);
                    nowMap = newWorMap;
                }

                if (i == key.length() - 1) {
                    nowMap.put("isEnd", "1");    //最后一个
                }
            }
        }
    }

    /**
     * 读取敏感词库中的内容，将内容添加到set集合中
     * @return
     * @throws IOException 异常
     */
    private Set<String> readSensitiveWordFile() throws IOException{
        Set<String> set = new HashSet<>();
        set.add("敏感词");
        set.add("敏敏");
        set.add("感感");
        set.add("词词");

//        String path = "D:\\image\\txt\\all.txt";
//        File file = new File(path);
//        if (!file.exists()) {
//            path = "C:\\myproject\\image\\txt\\all.txt";
//            file = new File(path);
//        }
////        File file = new File("D:\\SensitiveWord.txt");    //读取文件
//        try (InputStreamReader read = new InputStreamReader(new FileInputStream(file), ENCODING)) {
//            if (file.isFile() && file.exists()) {      //文件流是否存在
//                set = new HashSet<>();
//                BufferedReader bufferedReader = new BufferedReader(read);
//                String txt;
//                while ((txt = bufferedReader.readLine()) != null) {    //读取文件，将文件内容放入到set中
//                    set.add(txt);
//                }
//            } else {         //不存在抛出异常信息
//                throw new IOException("敏感词库文件不存在");
//            }
//        }
        return set;
    }
}
