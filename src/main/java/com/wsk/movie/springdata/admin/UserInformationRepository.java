package com.wsk.movie.springdata.admin;

import com.wsk.movie.springdata.admin.entity.UserinformationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/3/8  14:24
 */
public interface UserInformationRepository extends JpaRepository<UserinformationEntity, Integer>{

    @Query(value = "select * from userinformation limit ?,? ", nativeQuery = true)
    List<UserinformationEntity> getAll(int start, int end);

    List<UserinformationEntity> findById(int id);

    List<UserinformationEntity> findByNameStartsWith(String name);

    List<UserinformationEntity> findByPhone(String phone);

}
