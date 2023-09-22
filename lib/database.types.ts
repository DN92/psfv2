export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      application: {
        Row: {
          createdAt: string
          data: Json | null
          id: number
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          data?: Json | null
          id: number
          updatedAt?: string
        }
        Update: {
          createdAt?: string
          data?: Json | null
          id?: number
          updatedAt?: string
        }
        Relationships: []
      }
      catAsKitten: {
        Row: {
          breed: string
          createdAt: string
          description: string
          dob: string
          ears: string
          eyeColor: string
          furColor: string
          gender: string
          id: number
          isAdminHidden: boolean
          isAdultCat: string
          isHidden: boolean
          location: string
          mainImageSrcValue: string
          name: string
          price: string
          regNum: string
          status: string
          updatedAt: string
        }
        Insert: {
          breed?: string
          createdAt?: string
          description?: string
          dob?: string
          ears?: string
          eyeColor?: string
          furColor?: string
          gender?: string
          id: number
          isAdminHidden?: boolean
          isAdultCat?: string
          isHidden?: boolean
          location?: string
          mainImageSrcValue?: string
          name?: string
          price?: string
          regNum?: string
          status?: string
          updatedAt?: string
        }
        Update: {
          breed?: string
          createdAt?: string
          description?: string
          dob?: string
          ears?: string
          eyeColor?: string
          furColor?: string
          gender?: string
          id?: number
          isAdminHidden?: boolean
          isAdultCat?: string
          isHidden?: boolean
          location?: string
          mainImageSrcValue?: string
          name?: string
          price?: string
          regNum?: string
          status?: string
          updatedAt?: string
        }
        Relationships: []
      }
      contactRequest: {
        Row: {
          createdAt: string
          eMail: string
          hidden: boolean
          id: number
          message: string
          name: string
          phone: string
          updatedAt: string
          wasRead: boolean
        }
        Insert: {
          createdAt?: string
          eMail: string
          hidden?: boolean
          id: number
          message?: string
          name: string
          phone: string
          updatedAt?: string
          wasRead?: boolean
        }
        Update: {
          createdAt?: string
          eMail?: string
          hidden?: boolean
          id?: number
          message?: string
          name?: string
          phone?: string
          updatedAt?: string
          wasRead?: boolean
        }
        Relationships: []
      }
      kitten: {
        Row: {
          breed: string
          createdAt: string
          description: string
          dob: string
          ears: string
          eyeColor: string
          father: string
          furColor: string
          gender: string
          isAdminHidden: boolean
          isHidden: boolean
          location: string
          mainImageSrcValue: string
          mother: string
          name: string
          price: number
          regNum: string
          slug: string
          status: string
          type: string
          updatedAt: string
          uuid: string
        }
        Insert: {
          breed?: string
          createdAt?: string
          description?: string
          dob?: string
          ears?: string
          eyeColor?: string
          father?: string
          furColor?: string
          gender?: string
          isAdminHidden?: boolean
          isHidden?: boolean
          location?: string
          mainImageSrcValue?: string
          mother?: string
          name?: string
          price?: number
          regNum?: string
          slug?: string
          status?: string
          type?: string
          updatedAt?: string
          uuid?: string
        }
        Update: {
          breed?: string
          createdAt?: string
          description?: string
          dob?: string
          ears?: string
          eyeColor?: string
          father?: string
          furColor?: string
          gender?: string
          isAdminHidden?: boolean
          isHidden?: boolean
          location?: string
          mainImageSrcValue?: string
          mother?: string
          name?: string
          price?: number
          regNum?: string
          slug?: string
          status?: string
          type?: string
          updatedAt?: string
          uuid?: string
        }
        Relationships: []
      }
      mother: {
        Row: {
          breed: string
          createdAt: string
          description: string
          dob: string
          ears: string
          eyeColor: string
          furColor: string
          id: number
          isAdminHidden: boolean
          isHidden: boolean
          mainImageSrcValue: string
          name: string
          regNum: string
          slug: string
          status: string
          type: string
          updatedAt: string
        }
        Insert: {
          breed?: string
          createdAt?: string
          description?: string
          dob?: string
          ears?: string
          eyeColor?: string
          furColor?: string
          id: number
          isAdminHidden?: boolean
          isHidden?: boolean
          mainImageSrcValue?: string
          name?: string
          regNum?: string
          slug?: string
          status?: string
          type?: string
          updatedAt?: string
        }
        Update: {
          breed?: string
          createdAt?: string
          description?: string
          dob?: string
          ears?: string
          eyeColor?: string
          furColor?: string
          id?: number
          isAdminHidden?: boolean
          isHidden?: boolean
          mainImageSrcValue?: string
          name?: string
          regNum?: string
          slug?: string
          status?: string
          type?: string
          updatedAt?: string
        }
        Relationships: []
      }
      stud: {
        Row: {
          breed: string
          createdAt: string
          description: string
          dob: string
          ears: string
          eyeColor: string
          furColor: string
          id: number
          isAdminHidden: boolean
          isHidden: boolean
          mainImageSrcValue: string
          name: string
          regNum: string
          slug: string
          status: string
          type: string
          updatedAt: string
        }
        Insert: {
          breed?: string
          createdAt?: string
          description?: string
          dob?: string
          ears?: string
          eyeColor?: string
          furColor?: string
          id: number
          isAdminHidden?: boolean
          isHidden?: boolean
          mainImageSrcValue?: string
          name?: string
          regNum?: string
          slug?: string
          status?: string
          type?: string
          updatedAt?: string
        }
        Update: {
          breed?: string
          createdAt?: string
          description?: string
          dob?: string
          ears?: string
          eyeColor?: string
          furColor?: string
          id?: number
          isAdminHidden?: boolean
          isHidden?: boolean
          mainImageSrcValue?: string
          name?: string
          regNum?: string
          slug?: string
          status?: string
          type?: string
          updatedAt?: string
        }
        Relationships: []
      }
      user_permissions: {
        Row: {
          created_at: string
          email: string
          id: string
          level: string
        }
        Insert: {
          created_at?: string
          email?: string
          id: string
          level?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          level?: string
        }
        Relationships: [
          {
            foreignKeyName: 'user_permissions_id_fkey'
            columns: ['id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      user_questionaire: {
        Row: {
          age: number
          approved: boolean | null
          canreceive: string
          cat_gender: string
          city: string
          created_at: string
          ear_type: string
          email: string
          found_us_by: string
          full_name: string
          fur_color: string
          hidden: boolean | null
          household_size: number
          household_smoking: string
          id: number
          kitten_primary: string
          occupation: string
          own_home: string
          pets_allergies: string
          pets_allowed: string
          pets_previously_owned: string
          pets_restrictions: string
          phone_number: string
          rehome_details: string
          time_to_dedicate: string
          trait_primary: string
          user_fb: string
          user_id: string | null
          user_ig: string
          vet_commitment: string
          why_us: string
          will_breed: string
          will_declaw: string
        }
        Insert: {
          age?: number
          approved?: boolean | null
          canreceive?: string
          cat_gender?: string
          city?: string
          created_at?: string
          ear_type?: string
          email?: string
          found_us_by?: string
          full_name?: string
          fur_color?: string
          hidden?: boolean | null
          household_size?: number
          household_smoking?: string
          id?: number
          kitten_primary?: string
          occupation?: string
          own_home?: string
          pets_allergies?: string
          pets_allowed?: string
          pets_previously_owned?: string
          pets_restrictions?: string
          phone_number?: string
          rehome_details?: string
          time_to_dedicate?: string
          trait_primary?: string
          user_fb?: string
          user_id?: string | null
          user_ig?: string
          vet_commitment?: string
          why_us?: string
          will_breed?: string
          will_declaw?: string
        }
        Update: {
          age?: number
          approved?: boolean | null
          canreceive?: string
          cat_gender?: string
          city?: string
          created_at?: string
          ear_type?: string
          email?: string
          found_us_by?: string
          full_name?: string
          fur_color?: string
          hidden?: boolean | null
          household_size?: number
          household_smoking?: string
          id?: number
          kitten_primary?: string
          occupation?: string
          own_home?: string
          pets_allergies?: string
          pets_allowed?: string
          pets_previously_owned?: string
          pets_restrictions?: string
          phone_number?: string
          rehome_details?: string
          time_to_dedicate?: string
          trait_primary?: string
          user_fb?: string
          user_id?: string | null
          user_ig?: string
          vet_commitment?: string
          why_us?: string
          will_breed?: string
          will_declaw?: string
        }
        Relationships: [
          {
            foreignKeyName: 'user_questionaire_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
