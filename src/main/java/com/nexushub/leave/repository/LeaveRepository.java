package com.nexushub.leave.repository;

import com.nexushub.leave.entity.Leave;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LeaveRepository extends JpaRepository<Leave, Long> {

    Optional<Leave> findByLeaveId(String leaveId);

}