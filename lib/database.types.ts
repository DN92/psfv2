export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      application: {
        Row: {
          createdAt: string | null
          data: Json | null
          id: number
          updatedAt: string | null
        }
        Insert: {
          createdAt?: string | null
          data?: Json | null
          id: number
          updatedAt?: string | null
        }
        Update: {
          createdAt?: string | null
          data?: Json | null
          id?: number
          updatedAt?: string | null
        }
        Relationships: []
      }
      catAsKitten: {
        Row: {
          breed: string | null
          createdAt: string | null
          description: string | null
          dob: string | null
          ears: string | null
          eyeColor: string | null
          furColor: string | null
          gender: string | null
          id: number
          isAdminHidden: boolean | null
          isAdultCat: boolean | null
          isHidden: boolean | null
          location: string | null
          mainImageSrcValue: string | null
          name: string | null
          price: number | null
          regNum: string | null
          status: string | null
          updatedAt: string | null
        }
        Insert: {
          breed?: string | null
          createdAt?: string | null
          description?: string | null
          dob?: string | null
          ears?: string | null
          eyeColor?: string | null
          furColor?: string | null
          gender?: string | null
          id: number
          isAdminHidden?: boolean | null
          isAdultCat?: boolean | null
          isHidden?: boolean | null
          location?: string | null
          mainImageSrcValue?: string | null
          name?: string | null
          price?: number | null
          regNum?: string | null
          status?: string | null
          updatedAt?: string | null
        }
        Update: {
          breed?: string | null
          createdAt?: string | null
          description?: string | null
          dob?: string | null
          ears?: string | null
          eyeColor?: string | null
          furColor?: string | null
          gender?: string | null
          id?: number
          isAdminHidden?: boolean | null
          isAdultCat?: boolean | null
          isHidden?: boolean | null
          location?: string | null
          mainImageSrcValue?: string | null
          name?: string | null
          price?: number | null
          regNum?: string | null
          status?: string | null
          updatedAt?: string | null
        }
        Relationships: []
      }
      contactRequest: {
        Row: {
          createdAt: string | null
          eMail: string | null
          hidden: boolean | null
          id: number
          message: string | null
          name: string | null
          phone: string | null
          updatedAt: string | null
          wasRead: boolean | null
        }
        Insert: {
          createdAt?: string | null
          eMail?: string | null
          hidden?: boolean | null
          id: number
          message?: string | null
          name?: string | null
          phone?: string | null
          updatedAt?: string | null
          wasRead?: boolean | null
        }
        Update: {
          createdAt?: string | null
          eMail?: string | null
          hidden?: boolean | null
          id?: number
          message?: string | null
          name?: string | null
          phone?: string | null
          updatedAt?: string | null
          wasRead?: boolean | null
        }
        Relationships: []
      }
      Kitten: {
        Row: {
          breed: string
          createdAt: string | null
          description: string | null
          dob: string | null
          ears: string | null
          eyeColor: string | null
          father: string | null
          furColor: string | null
          gender: string | null
          id: number
          isAdminHidden: boolean | null
          isHidden: boolean | null
          location: string | null
          mainImageSrcValue: string | null
          mother: string | null
          name: string | null
          price: number | null
          regNum: string | null
          status: string | null
          updatedAt: string | null
        }
        Insert: {
          breed?: string | null
          createdAt?: string | null
          description?: string | null
          dob?: string | null
          ears?: string | null
          eyeColor?: string | null
          father?: string | null
          furColor?: string | null
          gender?: string | null
          id: number
          isAdminHidden?: boolean | null
          isHidden?: boolean | null
          location?: string | null
          mainImageSrcValue?: string | null
          mother?: string | null
          name?: string | null
          price?: number | null
          regNum?: string | null
          status?: string | null
          updatedAt?: string | null
        }
        Update: {
          breed?: string | null
          createdAt?: string | null
          description?: string | null
          dob?: string | null
          ears?: string | null
          eyeColor?: string | null
          father?: string | null
          furColor?: string | null
          gender?: string | null
          id?: number
          isAdminHidden?: boolean | null
          isHidden?: boolean | null
          location?: string | null
          mainImageSrcValue?: string | null
          mother?: string | null
          name?: string | null
          price?: number | null
          regNum?: string | null
          status?: string | null
          updatedAt?: string | null
        }
        Relationships: []
      }
      mother: {
        Row: {
          breed: string | null
          createdAt: string | null
          description: string | null
          dob: string | null
          ears: string | null
          eyeColor: string | null
          furColor: string | null
          id: number
          isAdminHidden: boolean | null
          isHidden: boolean | null
          mainImageSrcValue: string | null
          name: string | null
          regNum: string | null
          status: string | null
          updatedAt: string | null
        }
        Insert: {
          breed?: string | null
          createdAt?: string | null
          description?: string | null
          dob?: string | null
          ears?: string | null
          eyeColor?: string | null
          furColor?: string | null
          id: number
          isAdminHidden?: boolean | null
          isHidden?: boolean | null
          mainImageSrcValue?: string | null
          name?: string | null
          regNum?: string | null
          status?: string | null
          updatedAt?: string | null
        }
        Update: {
          breed?: string | null
          createdAt?: string | null
          description?: string | null
          dob?: string | null
          ears?: string | null
          eyeColor?: string | null
          furColor?: string | null
          id?: number
          isAdminHidden?: boolean | null
          isHidden?: boolean | null
          mainImageSrcValue?: string | null
          name?: string | null
          regNum?: string | null
          status?: string | null
          updatedAt?: string | null
        }
        Relationships: []
      }
      stud: {
        Row: {
          breed: string | null
          createdAt: string | null
          description: string | null
          dob: string | null
          ears: string | null
          eyeColor: string | null
          furColor: string | null
          id: number
          isAdminHidden: boolean | null
          isHidden: boolean | null
          mainImageSrcValue: string | null
          name: string | null
          regNum: string | null
          status: string | null
          updatedAt: string | null
        }
        Insert: {
          breed?: string | null
          createdAt?: string | null
          description?: string | null
          dob?: string | null
          ears?: string | null
          eyeColor?: string | null
          furColor?: string | null
          id: number
          isAdminHidden?: boolean | null
          isHidden?: boolean | null
          mainImageSrcValue?: string | null
          name?: string | null
          regNum?: string | null
          status?: string | null
          updatedAt?: string | null
        }
        Update: {
          breed?: string | null
          createdAt?: string | null
          description?: string | null
          dob?: string | null
          ears?: string | null
          eyeColor?: string | null
          furColor?: string | null
          id?: number
          isAdminHidden?: boolean | null
          isHidden?: boolean | null
          mainImageSrcValue?: string | null
          name?: string | null
          regNum?: string | null
          status?: string | null
          updatedAt?: string | null
        }
        Relationships: []
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
