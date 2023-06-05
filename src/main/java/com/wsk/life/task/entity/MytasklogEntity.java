package com.wsk.life.task.entity;

import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
 * @TIME : 2018/1/27  23:19
 */
@Entity
@Component
@Table(name = "mytasklog", schema = "movie", catalog = "")
public class MytasklogEntity {
    private int id;
    private String taskname;
    private Timestamp rtime;
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
    public Timestamp getRtime() {
        return rtime;
    }

    public void setRtime(Timestamp rtime) {
        this.rtime = rtime;
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

        MytasklogEntity entity = (MytasklogEntity) o;

        if (id != entity.id) return false;
        if (taskname != null ? !taskname.equals(entity.taskname) : entity.taskname != null) return false;
        if (rtime != null ? !rtime.equals(entity.rtime) : entity.rtime != null) return false;
        if (classname != null ? !classname.equals(entity.classname) : entity.classname != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (taskname != null ? taskname.hashCode() : 0);
        result = 31 * result + (rtime != null ? rtime.hashCode() : 0);
        result = 31 * result + (classname != null ? classname.hashCode() : 0);
        return result;
    }
}
