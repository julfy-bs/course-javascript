export default class UserPhoto {
  constructor(element, onUpload) {
    this.element = element;
    this.onUpload = onUpload;

    //Слушатель события на dragover для проверки количества файлов, которые находятся в dragover'е
    this.element.addEventListener('dragover', (e) => {
      if (e.dataTransfer.items.length && e.dataTransfer.items[0].kind === 'file') {
        e.preventDefault();
      }
    });

    // Слушатель события на drop для запуска ассинхронного чтения содержимого файлов(подгрузки картинки по отпусканию кнопки мыши)
    this.element.addEventListener('drop', (e) => {
      const file = e.dataTransfer.items[0].getAsFile();
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.addEventListener('load', () => this.onUpload(reader.result));
      e.preventDefault();
    });
  }

  // Установка BI для фото
  set(photo) {
    this.element.style.backgroundImage = `url(${photo})`;
  }
}
