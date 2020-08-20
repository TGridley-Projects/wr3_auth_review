insert into danger_zone_user (
    email, hash
) values (
    $1, $2
)
returning *;