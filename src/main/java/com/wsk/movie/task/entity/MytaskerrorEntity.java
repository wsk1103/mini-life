package com.wsk.movie.task.entity;

import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.Date;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/24  20:51
 */
@Entity
@Component
@Table(name = "mytaskerror", schema = "movie", catalog = "")
public class MytaskerrorEntity {
    private int id;
    private String taskname;
    private Date rtime;
    private String msg;
    private String classname;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "taskname")
    public String getTaskname() {
        return taskname;
    }

    public void setTaskname(String taskname) {
        this.taskname = taskname;
    }

    @Basic
    @Column(name = "rtime")
    public Date getRtime() {
        return rtime;
    }

    public void setRtime(Date rtime) {
        this.rtime = rtime;
    }

    @Basic
    @Column(name = "msg")
    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    @Basic
    @Column(name = "classname")
    public String getClassname() {
        return classname;
    }

    public void setClassname(String classname) {
        this.classname = classname;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MytaskerrorEntity that = (MytaskerrorEntity) o;

        if (id != that.id) return false;
        if (taskname != null ? !taskname.equals(that.taskname) : that.taskname != null) return false;
        if (rtime != null ? !rtime.equals(that.rtime) : that.rtime != null) return false;
        if (msg != null ? !msg.equals(that.msg) : that.msg != null) return false;
        if (classname != null ? !classname.equals(that.classname) : that.classname != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (taskname != null ? taskname.hashCode() : 0);
        result = 31 * result + (rtime != null ? rtime.hashCode() : 0);
        result = 31 * result + (msg != null ? msg.hashCode() : 0);
        result = 31 * result + (classname != null ? classname.hashCode() : 0);
        return result;
    }
}
