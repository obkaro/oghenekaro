import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pages_blocks_tools_slider_tools" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tool_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_tools_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_tools_slider_tools" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tool_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_tools_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_tools_slider_tools" ADD CONSTRAINT "pages_blocks_tools_slider_tools_tool_id_tools_id_fk" FOREIGN KEY ("tool_id") REFERENCES "public"."tools"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_tools_slider_tools" ADD CONSTRAINT "pages_blocks_tools_slider_tools_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_tools_slider"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_tools_slider" ADD CONSTRAINT "pages_blocks_tools_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_tools_slider_tools" ADD CONSTRAINT "_pages_v_blocks_tools_slider_tools_tool_id_tools_id_fk" FOREIGN KEY ("tool_id") REFERENCES "public"."tools"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_tools_slider_tools" ADD CONSTRAINT "_pages_v_blocks_tools_slider_tools_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_tools_slider"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_tools_slider" ADD CONSTRAINT "_pages_v_blocks_tools_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_tools_slider_tools_order_idx" ON "pages_blocks_tools_slider_tools" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_tools_slider_tools_parent_id_idx" ON "pages_blocks_tools_slider_tools" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_tools_slider_tools_tool_idx" ON "pages_blocks_tools_slider_tools" USING btree ("tool_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_tools_slider_order_idx" ON "pages_blocks_tools_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_tools_slider_parent_id_idx" ON "pages_blocks_tools_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_tools_slider_path_idx" ON "pages_blocks_tools_slider" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_tools_slider_tools_order_idx" ON "_pages_v_blocks_tools_slider_tools" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_tools_slider_tools_parent_id_idx" ON "_pages_v_blocks_tools_slider_tools" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_tools_slider_tools_tool_idx" ON "_pages_v_blocks_tools_slider_tools" USING btree ("tool_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_tools_slider_order_idx" ON "_pages_v_blocks_tools_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_tools_slider_parent_id_idx" ON "_pages_v_blocks_tools_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_tools_slider_path_idx" ON "_pages_v_blocks_tools_slider" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_tools_slider_tools" CASCADE;
  DROP TABLE "pages_blocks_tools_slider" CASCADE;
  DROP TABLE "_pages_v_blocks_tools_slider_tools" CASCADE;
  DROP TABLE "_pages_v_blocks_tools_slider" CASCADE;`)
}
