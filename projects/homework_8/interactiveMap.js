/* global ymaps */

export default class InteractiveMap {
  constructor(mapId, onClick) {
    this.mapId = mapId;
    this.onClick = onClick;
  }

  async init() {
    await this.injectYMapsScript();
    await this.loadYMaps();
    this.initMap();
  }

  injectYMapsScript() {
    return new Promise((resolve) => {
      const ymapsScript = document.createElement('script');
      ymapsScript.src =
        'https://api-maps.yandex.ru/2.1/?apikey=5a4c2cfe-31f1-4007-af4e-11db22b6954b&lang=ru_RU';
      document.body.appendChild(ymapsScript);
      ymapsScript.addEventListener('load', resolve);
    });
  }

  loadYMaps() {
    return new Promise((resolve) => ymaps.ready(resolve));
  }

  initMap() {
    this.clusterer = new ymaps.Clusterer({
      preset: 'islands#invertedDarkOrangeClusterIcons',
      groupByCoordinates: true,
      clusterDisableClickZoom: true,
      clusterOpenBalloonOnClick: false,
    });
    this.clusterer.events.add('click', (e) => {
      const coords = e.get('target').geometry.getCoordinates();
      this.onClick(coords);
    });
    this.map = new ymaps.Map(this.mapId, {
      center: [55.76, 37.64],
      zoom: 10,
      controls: [],
    });
    this.map.controls.add('zoomControl');
    this.map.controls.add('searchControl');
    this.map.behaviors.disable(['dblClickZoom']);
    this.map.events.add('click', (e) => this.onClick(e.get('coords')));
    this.map.geoObjects.add(this.clusterer);
    this.map.MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
      '<div class="popover top">' +
        '<a class="close" href="#">&times;</a>' +
        '<div class="arrow"></div>' +
        '<div class="popover-inner">' +
        '$[[options.contentLayout observeSize minWidth=235 maxWidth=235 maxHeight=350]]' +
        '</div>' +
        '</div>',
      {
        build: function () {
          this.constructor.superclass.build.call(this);

          this.popup = document.querySelector('.popover');
          this.close = document.querySelector('.close');

          this.applyElementOffset();

          this.close.addEventListener('click', {});
        },
      }
    );
  }

  getStreetNameWithClick(coords) {
    return new Promise((resolve, reject) => {
      ymaps
        .geocode(coords)
        .then((res) =>
          resolve(
            res.geoObjects.get(0)
              ? res.geoObjects.get(0).getAddressLine()
              : 'Не удалось определить адрес.'
          )
        )
        .catch((e) => reject(e));
    });
  }

  async openBalloon(coords, content) {
    this.map.balloon.open(coords, content);
  }

  setBalloonContent(content) {
    this.map.balloon.setData(content);
  }

  closeBalloon() {
    this.map.balloon.close();
  }

  createPlacemark(coords) {
    const placemark = new ymaps.Placemark(
      coords,
      {
        // Свойства.
        // Содержимое иконки, балуна и хинта.
        iconContent: '1',
        balloonContent: 'Балун',
        hintContent: 'Стандартный значок метки',
      },
      {
        // Опции.
        // Стандартная фиолетовая иконка.
        preset: 'islands#darkOrangeDotIcon',
      }
    );
    placemark.events.add('click', (e) => {
      const coords = e.get('target').geometry.getCoordinates();
      this.onClick(coords);
    });
    this.clusterer.add(placemark);
  }
}