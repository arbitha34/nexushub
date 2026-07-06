package com.nexushub.user.dto;

import com.nexushub.user.entity.Role;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserResponse {

    private Long id;

    private String fullName;

    private String email;

    private Role role;

    private Boolean active;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

}