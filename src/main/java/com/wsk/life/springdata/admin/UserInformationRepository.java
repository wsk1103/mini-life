package com.wsk.life.springdata.admin;

import com.wsk.life.springdata.admin.entity.UserinformationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
 * @TIME : 2018/3/8  14:24
 */
public interface UserInformationRepository extends JpaRepository<UserinformationEntity, Integer> {

    @Query(value = "SELECT * FROM userinformation LIMIT ?,? ", nativeQuery = true)
    List<UserinformationEntity> getAll(int start, int end);

    List<UserinformationEntity> findById(int id);

    List<UserinformationEntity> findByNameStartsWith(String name);

    List<UserinformationEntity> findByPhone(String phone);

    @Modifying
    @Transactional
    @Query(value = "UPDATE userinformation SET allowed = :allowed WHERE id = :id", nativeQuery = true)
    int update(@Param(value = "id") int id, @Param(value = "allowed") int allowed);

}
