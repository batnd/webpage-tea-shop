$(document).ready(function () {
    // Инициализация wow.js
    new WOW({
        animateClass: 'animate__animated',
    }).init();

    // Инициализация magnific-popup
    $('.open-popup-link').magnificPopup({
        type: "image",

        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function(openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });

    // Подключение слайдера
    $('.single-item').slick();

    // Нахожу объекты стрелок слайдера от slick
    let sliderArrowLeft = $(".slick-prev.slick-arrow");
    let sliderArrowRight = $(".slick-next.slick-arrow");

    // Удаляю класс со стилем левой стрелки по умолчанию
    sliderArrowLeft.removeClass("slick-prev");
    // Добавляю мой новый класс для стиля левой стрелки
    sliderArrowLeft.addClass("left-Arrow-Position");

    // Удаляю класс со стилем правой стрелки по умолчанию
    sliderArrowRight.removeClass("slick-next");
    // Добавляю мой новый класс для стиля правой стрелки
    sliderArrowRight.addClass("right-Arrow-Position");

    // Вставляю svg-код для левой стрелки
    sliderArrowLeft.html("<svg width=\"13\" height=\"20\" viewBox=\"0 0 13 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "<path d=\"M0.329347 9.47742L8.79079 0.176819C8.98648 -0.0384587 9.25508 -0.164517 9.547 -0.178062C9.83891 -0.191607 10.1179 -0.0909537 10.3323 0.105292L11.0152 0.729469C11.4596 1.13622 11.4912 1.82934 11.0858 2.27487L3.98048 10.085L11.7758 17.212C11.9903 17.4082 12.116 17.6772 12.1294 17.9697C12.1427 18.2625 12.042 18.5421 11.8463 18.7575L11.2232 19.4421C11.0273 19.6574 10.7589 19.7835 10.467 19.797C10.1751 19.8106 9.89613 19.7099 9.68165 19.5137L0.400128 11.0282C0.185134 10.8313 0.0596442 10.561 0.0469202 10.268C0.0328484 9.97388 0.133188 9.6932 0.329347 9.47742Z\"/>\n" +
        "</svg>\n");
    // Вставляю svg-код для правой стрелки
    sliderArrowRight.html("<svg width=\"13\" height=\"20\" viewBox=\"0 0 13 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "<path d=\"M12.6794 10.5226L4.218 19.8232C4.02231 20.0385 3.75371 20.1645 3.46179 20.1781C3.16987 20.1916 2.89093 20.091 2.67645 19.8947L1.99357 19.2705C1.54919 18.8638 1.51756 18.1707 1.92304 17.7251L9.02831 9.91505L1.23299 2.78805C1.01851 2.5918 0.892756 2.32276 0.879407 2.03028C0.866042 1.73747 0.966758 1.45792 1.16245 1.24248L1.78559 0.557867C1.98144 0.342583 2.24988 0.216532 2.5418 0.202987C2.83371 0.189442 3.11266 0.290095 3.32714 0.48634L12.6087 8.97182C12.8237 9.16869 12.9491 9.43905 12.9619 9.73205C12.9759 10.0261 12.8756 10.3068 12.6794 10.5226Z\"/>\n" +
        "</svg>\n");

    // Подключение "Аккордеона"
    $("#accordion").accordion({
        heightStyle: "content",
        collapsible: true
    });


    // Валидация формы
    let formInputFirstName = $("#inputFirstName");
    let formInputSecondName = $("#inputSecondName");
    let formInputPhone = $("#inputPhone");
    let formInputCountry = $("#inputCountry");
    let formInputZip = $("#inputZip");
    let formInputAddress = $("#inputAddress");
    let formSubmitButton = $("#submitButton");
    let formToHide = $("#formHide");
    let formToShow = $("#formToShow");
    let messageName = $("#forName");

    formSubmitButton.on("click", function (event) {
        let formInputFirstNameValue = formInputFirstName.val();
        let formInputSecondNameValue = formInputSecondName.val();
        let formInputPhoneValue = formInputPhone.val();
        let formInputCountryValue = formInputCountry.val();
        let formInputZipValue = formInputZip.val();
        let formInputAddressValue = formInputAddress.val();

        if (!formInputFirstNameValue) {
            alert("Пожалуйста, введите Ваше имя!");
            return false;
        }
        if (!formInputSecondNameValue) {
            alert("Пожалуйста, введите Вашу фамилию!");
            return false;
        }
        if (!formInputPhoneValue) {
            alert("Пожалуйста, укажите Ваш контактный номер!");
            return false;
        }
        if (!formInputCountryValue) {
            alert("Пожалуйста, укажите страну доставки!");
            return false;
        }
        if (!formInputZipValue) {
            alert("Пожалуйста, укажите индекс адреса!");
            return false;
        }
        if (formInputZipValue.length !== 6) {
            alert("Неправильный индекс! Индекс состоит из 6 цифр.")
            return false;
        }
        if (!formInputAddressValue) {
            alert("Пожалуйста, введите адрес доставки!");
            return false;
        }

        // Скрытие формы и появление окна с сообщением
        formToHide.addClass("d-none");
        messageName.prepend(formInputFirstNameValue + ", ")
        formToShow.removeClass("d-none").addClass("d-flex");

        // Перезагрузка страницы через 5сек
        setTimeout(function() {
            location.reload();
        }, 5000);

        event.preventDefault();
    });

    // Ввод номера по маске
    formInputPhone.inputmask({"mask": "+9 (999) 999-99-99"});

    // Ввод только цифр в поле "Индекс"
    formInputZip.on("keydown", function (event) {
        let input = event.key;

        if (input.toLowerCase() === 'backspace' || input.toLowerCase() === 'tab') {
            return;
        }

        if (isNaN(input)) {
            return false;
        }
    });
})