import Model from './model/model';
import Presenter from './presenter/presenter';

const model = new Model();
console.log(model.destinations)
console.log(model.offers)
console.log(model.points)
const presenter = new Presenter(model);
presenter.init();
