export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      certificates: {
        Row: {
          id: string
          asset_code: string
          transaction_code: string
          security_code: string
          depositor_name: string
          depositor_nationality: string
          next_of_kin_name: string
          next_of_kin_nationality: string
          date_of_deposit: string
          purpose_of_deposit: string
          security_charges_per_week: string
          consignment_package: string
          consignment_content: string
          current_asset_status: string
          assigned_custodian: string
          vault_code: string
          last_verification_date: string
          next_verification_date: string
          document_expiry: string
          internal_notes: string | null
          access_log: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          asset_code: string
          transaction_code: string
          security_code: string
          depositor_name: string
          depositor_nationality: string
          next_of_kin_name: string
          next_of_kin_nationality: string
          date_of_deposit: string
          purpose_of_deposit: string
          security_charges_per_week: string
          consignment_package: string
          consignment_content: string
          current_asset_status: string
          assigned_custodian: string
          vault_code: string
          last_verification_date: string
          next_verification_date: string
          document_expiry: string
          internal_notes?: string | null
          access_log?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          asset_code?: string
          transaction_code?: string
          security_code?: string
          depositor_name?: string
          depositor_nationality?: string
          next_of_kin_name?: string
          next_of_kin_nationality?: string
          date_of_deposit?: string
          purpose_of_deposit?: string
          security_charges_per_week?: string
          consignment_package?: string
          consignment_content?: string
          current_asset_status?: string
          assigned_custodian?: string
          vault_code?: string
          last_verification_date?: string
          next_verification_date?: string
          document_expiry?: string
          internal_notes?: string | null
          access_log?: Json | null
          created_at?: string
        }
      }
      contact_messages: {
        Row: {
          id: string
          full_name: string
          email: string
          phone: string
          company: string
          message: string
          status: 'pending' | 'read' | 'responded'
          created_at: string
        }
        Insert: {
          id?: string
          full_name: string
          email: string
          phone: string
          company: string
          message: string
          status?: 'pending' | 'read' | 'responded'
          created_at?: string
        }
        Update: {
          id?: string
          full_name?: string
          email?: string
          phone?: string
          company?: string
          message?: string
          status?: 'pending' | 'read' | 'responded'
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
