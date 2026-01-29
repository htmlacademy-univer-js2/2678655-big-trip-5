import { createFormEditTemplate } from './templates.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class EditFormView extends AbstractView{
  #handleSubmit = null;

  constructor({onSubmit}){
    super();
    this.#handleSubmit = onSubmit;
    this.element.addEventListener('submit', this.#submitHandler);
  }

  get template() {
    return createFormEditTemplate();
  }

  #submitHandler = (evt) => {
    evt.preventDefault();
    this.#handleSubmit();
  }
}
