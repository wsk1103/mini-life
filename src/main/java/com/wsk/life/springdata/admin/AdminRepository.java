package com.wsk.life.springdata.admin;

import com.wsk.life.springdata.admin.entity.AdmininformationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
 * @TIME : 2018/3/8  15:32
 */
public interface AdminRepository extends JpaRepository<AdmininformationEntity, Integer>{
    AdmininformationEntity findAdmininformationEntityByPhone(String phone);
}
