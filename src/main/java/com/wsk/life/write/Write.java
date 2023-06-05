package com.wsk.life.write;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * @DESCRIPTION :文件读写
 * @AUTHOR : sk
 * @TIME : 2018/1/23  21:54
 */
public class Write {

    //写入日志
    public static void writeToFile(String msg){
        File file = new File("/myLog.txt");
        if (!file.exists()) {
            try {
                file.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
                return;
            }
        }
        try (FileWriter fw = new FileWriter(file, true); PrintWriter pw = new PrintWriter(fw)) {
            pw.append(msg);
            pw.append("\n");
            pw.flush();
            fw.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
