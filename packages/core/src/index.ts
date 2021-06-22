/**
 * @description core index
 * @author wangfupeng
 */

import './assets/index.less'

import create from './create-editor'
import { RenderTextStyleFnType, RenderElemFnType } from './formats/index'
import { TextStyleToHtmlFnType, TextToHtmlFnType, ElemToHtmlFnType } from './to-html/index'
import { IMenuConf } from './menus/index'
import { IDomEditor } from './editor/dom-editor'

// 创建编辑器
export const createEditor = create

// editor 接口和 command
export * from './editor/dom-editor'

// 注册 formats
export * from './formats/index'

// to html
export * from './to-html/index'

// 注册 menus
export * from './menus/index'

// 扩展模块的接口
interface IRenderElemConf {
  type: string
  renderElem: RenderElemFnType
}

interface IElemToHtmlConf {
  type: string
  elemToHtml: ElemToHtmlFnType
}

export interface IModuleConf {
  // 注册菜单
  menus?: Array<IMenuConf>

  // 渲染 modal -> view
  renderTextStyle?: RenderTextStyleFnType
  renderElems?: Array<IRenderElemConf>

  // to html
  textStyleToHtml?: TextStyleToHtmlFnType
  textToHtml?: TextToHtmlFnType
  elemsToHtml?: Array<IElemToHtmlConf>

  // 注册插件
  editorPlugin?: <T extends IDomEditor>(editor: T) => T
}
