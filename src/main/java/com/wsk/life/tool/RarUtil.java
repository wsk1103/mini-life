package com.wsk.life.tool;

import com.github.junrar.Archive;
import com.github.junrar.exception.RarException;
import com.github.junrar.rarfile.FileHeader;
import lombok.extern.slf4j.Slf4j;

import java.io.*;

/**
 * @author sk
 * @date 2023/4/21
 */
@Slf4j
public class RarUtil {

    /**
     * 根据原始rar路径，解压到指定文件夹下
     * 这种方法只能解压rar 5.0版本以下的,5.0及其以上的无法解决
     *
     * @param srcRarPath       原始rar路径+name
     * @param dstDirectoryPath 解压到的文件夹
     */
    public static String unRarFile(String srcRarPath, String dstDirectoryPath) throws Exception {
        log.debug("unRarFile srcRarPath:{}, dstDirectoryPath:{}", srcRarPath, dstDirectoryPath);
        if (!srcRarPath.toLowerCase().endsWith(".rar")) {
            log.warn("srcFilePath is not rar file");
            return "";
        }
        File dstDiretory = new File(dstDirectoryPath);
        // 目标目录不存在时，创建该文件夹
        if (!dstDiretory.exists()) {
            dstDiretory.mkdirs();
        }
        // Archive archive = new Archive(new File(srcRarPath));  com.github.junrar 0.7版本jarAPI
        Archive archive = new Archive(new FileInputStream(new File(srcRarPath)));
        if (archive != null) {
            // 打印文件信息
            archive.getMainHeader().print();
            FileHeader fileHeader = archive.nextFileHeader();
            while (fileHeader != null) {
                // 解决中文乱码问题【压缩文件中文乱码】
                String fileName = fileHeader.getFileNameW().isEmpty() ? fileHeader.getFileNameString() : fileHeader.getFileNameW();
                // 文件夹
                if (fileHeader.isDirectory()) {
                    File fol = new File(dstDirectoryPath + File.separator + fileName.trim());
                    fol.mkdirs();
                } else { // 文件
                    // 解决linux系统中\分隔符无法识别问题
                    String[] fileParts = fileName.split("\\\\");
                    StringBuilder filePath = new StringBuilder();
                    for (String filePart : fileParts) {
                        filePath.append(filePart).append(File.separator);
                    }
                    fileName = filePath.substring(0, filePath.length() - 1);
                    File out = new File(dstDirectoryPath + File.separator + fileName.trim());
                    if (!out.exists()) {
                        // 相对路径可能多级，可能需要创建父目录.
                        if (!out.getParentFile().exists()) {
                            out.getParentFile().mkdirs();
                        }
                        out.createNewFile();
                    }
                    FileOutputStream os = new FileOutputStream(out);
                    archive.extractFile(fileHeader, os);
                }
                fileHeader = archive.nextFileHeader();
            }
        } else {
            log.warn("rar file decompression failed , archive is null");
        }
        return dstDirectoryPath;
    }

}
