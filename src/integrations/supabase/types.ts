export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      audit_findings: {
        Row: {
          audit_run_id: string
          category: string
          check_key: string
          created_at: string
          dismissed: boolean
          evidence: Json | null
          explanation: string | null
          id: string
          recommendation: string | null
          status: string
          title: string
          weight: number
        }
        Insert: {
          audit_run_id: string
          category: string
          check_key: string
          created_at?: string
          dismissed?: boolean
          evidence?: Json | null
          explanation?: string | null
          id?: string
          recommendation?: string | null
          status: string
          title: string
          weight?: number
        }
        Update: {
          audit_run_id?: string
          category?: string
          check_key?: string
          created_at?: string
          dismissed?: boolean
          evidence?: Json | null
          explanation?: string | null
          id?: string
          recommendation?: string | null
          status?: string
          title?: string
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "audit_findings_audit_run_id_fkey"
            columns: ["audit_run_id"]
            isOneToOne: false
            referencedRelation: "audit_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_runs: {
        Row: {
          created_at: string
          id: string
          page_id: string
          score: number
          snapshot_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          page_id: string
          score?: number
          snapshot_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          page_id?: string
          score?: number
          snapshot_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_runs_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_runs_snapshot_id_fkey"
            columns: ["snapshot_id"]
            isOneToOne: false
            referencedRelation: "page_snapshots"
            referencedColumns: ["id"]
          },
        ]
      }
      change_history: {
        Row: {
          action: string
          created_at: string
          detail: Json | null
          draft_id: string | null
          id: string
          page_id: string
        }
        Insert: {
          action: string
          created_at?: string
          detail?: Json | null
          draft_id?: string | null
          id?: string
          page_id: string
        }
        Update: {
          action?: string
          created_at?: string
          detail?: Json | null
          draft_id?: string | null
          id?: string
          page_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "change_history_draft_id_fkey"
            columns: ["draft_id"]
            isOneToOne: false
            referencedRelation: "seo_drafts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "change_history_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
        ]
      }
      keywords: {
        Row: {
          created_at: string
          id: string
          intent: string | null
          keyword: string
          kind: string
          page_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          intent?: string | null
          keyword: string
          kind?: string
          page_id: string
        }
        Update: {
          created_at?: string
          id?: string
          intent?: string | null
          keyword?: string
          kind?: string
          page_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "keywords_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
        ]
      }
      page_snapshots: {
        Row: {
          canonical: string | null
          fetched_at: string
          headings: Json
          http_status: number | null
          id: string
          meta_description: string | null
          page_id: string
          robots: string | null
          title: string | null
          word_count: number | null
        }
        Insert: {
          canonical?: string | null
          fetched_at?: string
          headings?: Json
          http_status?: number | null
          id?: string
          meta_description?: string | null
          page_id: string
          robots?: string | null
          title?: string | null
          word_count?: number | null
        }
        Update: {
          canonical?: string | null
          fetched_at?: string
          headings?: Json
          http_status?: number | null
          id?: string
          meta_description?: string | null
          page_id?: string
          robots?: string | null
          title?: string | null
          word_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "page_snapshots_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
        ]
      }
      pages: {
        Row: {
          created_at: string
          error_message: string | null
          id: string
          last_analyzed_at: string | null
          status: string
          updated_at: string
          url: string
          website_id: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          id?: string
          last_analyzed_at?: string | null
          status?: string
          updated_at?: string
          url: string
          website_id: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          id?: string
          last_analyzed_at?: string | null
          status?: string
          updated_at?: string
          url?: string
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pages_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "websites"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
        }
        Relationships: []
      }
      seo_drafts: {
        Row: {
          after_value: string | null
          before_value: string | null
          created_at: string
          created_by: string
          field: string
          id: string
          page_id: string
          source: string
          status: string
          updated_at: string
        }
        Insert: {
          after_value?: string | null
          before_value?: string | null
          created_at?: string
          created_by: string
          field: string
          id?: string
          page_id: string
          source?: string
          status?: string
          updated_at?: string
        }
        Update: {
          after_value?: string | null
          before_value?: string | null
          created_at?: string
          created_by?: string
          field?: string
          id?: string
          page_id?: string
          source?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "seo_drafts_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
        ]
      }
      websites: {
        Row: {
          created_at: string
          domain: string
          id: string
          name: string
          owner: string
          platform: string | null
          target_country: string | null
          target_language: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          domain: string
          id?: string
          name: string
          owner: string
          platform?: string | null
          target_country?: string | null
          target_language?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          domain?: string
          id?: string
          name?: string
          owner?: string
          platform?: string | null
          target_country?: string | null
          target_language?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "websites_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_finding_owner: { Args: { _audit_run_id: string }; Returns: boolean }
      is_page_owner: { Args: { _page_id: string }; Returns: boolean }
      is_website_owner: { Args: { _website_id: string }; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
