export type ProjectRow = {
    id: string;
    title_fa: string;
    title_en: string;
    client_fa: string;
    client_en: string;
    year_fa: string;
    year_en: string;
    location_fa: string;
    location_en: string;
    category_fa: string;
    category_en: string;
    power: string | null;
    description_fa: string;
    description_en: string;
    image: string;
    tags: string[];
    status: "published" | "draft";
    sort_order: number;
    created_at: string;
    updated_at: string;
  };
  
  export type ProjectInsert = {
    id?: string;
    title_fa: string;
    title_en: string;
    client_fa?: string;
    client_en?: string;
    year_fa?: string;
    year_en?: string;
    location_fa?: string;
    location_en?: string;
    category_fa?: string;
    category_en?: string;
    power?: string | null;
    description_fa?: string;
    description_en?: string;
    image?: string;
    tags?: string[];
    status?: "published" | "draft";
    sort_order?: number;
    created_at?: string;
    updated_at?: string;
  };
  
  export type ProjectUpdate = Partial<ProjectInsert>;
  
  export type ServiceRow = {
    id: string;
    icon: string;
    title_fa: string;
    title_en: string;
    desc_fa: string;
    desc_en: string;
    image: string;
    features_fa: string[];
    features_en: string[];
    status: "published" | "draft";
    sort_order: number;
    created_at: string;
    updated_at: string;
  };
  
  export type ServiceInsert = {
    id?: string;
    icon?: string;
    title_fa: string;
    title_en: string;
    desc_fa?: string;
    desc_en?: string;
    image?: string;
    features_fa?: string[];
    features_en?: string[];
    status?: "published" | "draft";
    sort_order?: number;
    created_at?: string;
    updated_at?: string;
  };
  
  export type ServiceUpdate = Partial<ServiceInsert>;
  
  export type SiteSettingsRow = {
    id: number;
    site_name_fa: string;
    site_name_en: string;
    phone: string;
    email: string;
    address_fa: string;
    address_en: string;
    whatsapp: string | null;
    instagram: string | null;
    linkedin: string | null;
    updated_at: string;
  };
  
  export type SiteSettingsUpdate = Partial<
    Omit<SiteSettingsRow, "id">
  >;
  
  export type Database = {
    public: {
      Tables: {
        projects: {
          Row: ProjectRow;
          Insert: ProjectInsert;
          Update: ProjectUpdate;
          Relationships: [];
        };
        services: {
          Row: ServiceRow;
          Insert: ServiceInsert;
          Update: ServiceUpdate;
          Relationships: [];
        };
        site_settings: {
          Row: SiteSettingsRow;
          Insert: Partial<SiteSettingsRow> & { id?: number };
          Update: SiteSettingsUpdate;
          Relationships: [];
        };
      };
      Views: Record<string, never>;
      Functions: Record<string, never>;
      Enums: Record<string, never>;
      CompositeTypes: Record<string, never>;
    };
  };