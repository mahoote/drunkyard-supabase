export interface PlayerDto {
    id: string
    user_id?: string
    username?: string
    first_name?: string
    last_name?: string
    is_guest: boolean
    created_at: string
    updated_at?: string
    deleted_at?: string
}

export interface PlayerUpdateDto {
    user_id: string
    username?: string
    first_name?: string
    last_name?: string
}
