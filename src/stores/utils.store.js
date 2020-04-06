// src/stores/theme-store.tsx
import { observable, action } from 'mobx'

export class UtilsStore {
    constructor (i18Ref) {
        this.i18Ref = i18Ref
    }
  @observable language = 'en'
  @observable i18Ref = null

  @action setI18Context = (i18Ref) =>{
    this.i18Ref = i18Ref
  }
  
  @action
  setLanguage = (newLanguage) => {
    this.language = newLanguage
    this.i18Ref.changeLanguage(newLanguage)
  }
}