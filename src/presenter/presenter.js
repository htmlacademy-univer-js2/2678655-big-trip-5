import { render } from '../framework/render.js';
import FiltersView from '../view/filters-view/filters-view.js';
import SortView from '../view/sort-view/sort-view.js';
import EventListView from '../view/event-list-view/event-list-view.js';
import EventItemView from '../view/event-item-view/event-item-view.js';
import EditFormView from  '../view/form-view/edit-form-view.js';

export default class Presenter {
  #model = null;
  #filtersContainer = null;
  #eventsContainer = null;
  #sortComponent = null;
  #eventListComponent = null;
  #filtersComponent = null;
  #formEditComponent = null;

  constructor({model, filtersContainer, eventsContainer}) {
    this.#model = model;
    this.#filtersContainer = filtersContainer;
    this.#eventsContainer = eventsContainer;
  }

  #prepareEventData(point) {
    const destination = this.#model.getDestinationById(point.destination);
    const typeOffers = this.#model.getOfferByType(point.type);
    const offers = typeOffers.offers?.filter((offer) => point.offers.includes(offer.id)) || [];
    return { point, offers, destination };
  }

  #renderEvent(point, container) {
    const eventData = this.#prepareEventData(point);
    const eventItem = new EventItemView(eventData, {
      onClick: this.#handleEventItemClick
    });
    render(eventItem, container);
  }

  renderEvents() {
    const listElement = this.#eventListComponent.element;
    this.#model.points.forEach((point) =>
      this.#renderEvent(point, listElement)
    );
  }

  #handleEventItemClick = (point) => {
    console.log('Клик по точке:', point);
  };

  #handleEditFormSubmit = () => {
    console.log('Клик по кнопке сохранения');
  };

  init() {
    this.#filtersComponent = new FiltersView();
    this.#sortComponent = new SortView();
    this.#eventListComponent = new EventListView();
    this.#formEditComponent = new EditFormView({
        onSubmit: this.#handleEditFormSubmit
      }
    );

    render(this.#filtersComponent, this.#filtersContainer);
    render(this.#sortComponent, this.#eventsContainer);
    render(this.#formEditComponent, this.#eventsContainer);
    render(this.#eventListComponent, this.#eventsContainer);
    this.renderEvents();
  }
}
