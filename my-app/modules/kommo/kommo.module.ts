import { Kommo } from "./factory/kommo.factory";

// src/kommo/kommo.module.ts
export class KommoModule {
    private static instance: KommoModule;
    private kommo!: Kommo;
  
    private constructor() {}
  
    public static getInstance(): KommoModule {
        try{
            if (!KommoModule.instance) {
                KommoModule.instance = new KommoModule();
            }
            KommoModule.instance.kommo = new Kommo();
        } catch(e){
            console.error(e)
        }
        return KommoModule.instance;
    }
  
    get kommoInstance(): Kommo {
      return this.kommo;
    }
  }
  