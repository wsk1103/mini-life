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
@Table(name = "mytask", schema = "movie", catalog = "")
public class MytaskEntity {
    private int id;
    private String taskname;
    private Integer status;
    private Timestamp starttime;
    private Timestamp nexttime;
    private Timestamp begintime;
    private String classname;
    private String expression;

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
    @Column(name = "status")
    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    @Basic
    @Column(name = "starttime")
    public Timestamp getStarttime() {
        return starttime;
    }

    public void setStarttime(Timestamp starttime) {
        this.starttime = starttime;
    }

    @Basic
    @Column(name = "nexttime")
    public Timestamp getNexttime() {
        return nexttime;
    }

    public void setNexttime(Timestamp nexttime) {
        this.nexttime = nexttime;
    }

    @Basic
    @Column(name = "begintime")
    public Timestamp getBegintime() {
        return begintime;
    }

    public void setBegintime(Timestamp begintime) {
        this.begintime = begintime;
    }

    @Basic
    @Column(name = "classname")
    public String getClassname() {
        return classname;
    }

    public void setClassname(String classname) {
        this.classname = classname;
    }

    @Basic
    @Column(name = "expression")
    public String getExpression() {
        return expression;
    }

    public void setExpression(String expression) {
        this.expression = expression;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MytaskEntity entity = (MytaskEntity) o;

        if (id != entity.id) return false;
        if (taskname != null ? !taskname.equals(entity.taskname) : entity.taskname != null) return false;
        if (status != null ? !status.equals(entity.status) : entity.status != null) return false;
        if (starttime != null ? !starttime.equals(entity.starttime) : entity.starttime != null) return false;
        if (nexttime != null ? !nexttime.equals(entity.nexttime) : entity.nexttime != null) return false;
        if (begintime != null ? !begintime.equals(entity.begintime) : entity.begintime != null) return false;
        if (classname != null ? !classname.equals(entity.classname) : entity.classname != null) return false;
        if (expression != null ? !expression.equals(entity.expression) : entity.expression != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (taskname != null ? taskname.hashCode() : 0);
        result = 31 * result + (status != null ? status.hashCode() : 0);
        result = 31 * result + (starttime != null ? starttime.hashCode() : 0);
        result = 31 * result + (nexttime != null ? nexttime.hashCode() : 0);
        result = 31 * result + (begintime != null ? begintime.hashCode() : 0);
        result = 31 * result + (classname != null ? classname.hashCode() : 0);
        result = 31 * result + (expression != null ? expression.hashCode() : 0);
        return result;
    }
}
