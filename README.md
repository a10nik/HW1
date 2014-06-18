HW1
===

<h4>КиноБыстро.</h4>

<h4>Что будем делать?</h4>

Предположим, что мы решили открыть startup продажи билетов в кино через мобильные телефоны.

<h4>Что мы имеем на руках:</h4>

<ul> 
 <li>Список кинотеатров + дополнительную информацию о каждом из них</li>
 <li>Списко фильмов для каждого кинотетра + дополнительную информацию к каждому фильму.</li>
 <li>О пользователе мы знаем координату, где он находится в данный момент.</li>
 <li>О реальном мире мы знаем текущию дату и время.</li>
</ul>

<h4>Домашнее задание 1</h4>

<ol> 
 <li>
     <div>Творческое</div>
     Придумать модели, которые нужны для нашего сервиса.
     <div>*. По сложности модели могут быть любыми.</div>
 </li>
 <li>
     <div>Реализовать функции, которые создают ваши модели. Например</div>
     <pre>
function createCircle(radius, position, options) {
  options = options || {};
  return {
      radius: radius,
      position: position,
      color: options.color || "black" 
   };
}
     </pre>
     Совет: Не пишите функции, которые зависят более чем от 3-5 параметров <br/>
     Cовет: В опциях должны лежать неважные параметры
 </li>
 <li>
     <div>Советую написать небольшую "базу" кинотетров (2-3) и фильмов в них (3-5). Например, так:</div>
     <pre>
var circles = [1, 2, 3, 4, 5].map(function (number) {
  return createCircle(Math.abs(5 - number), {
            x: number * number,
            y: number + number,
            color: number % 2 ? "black" + number : undefined
        });
    });
     </pre>
 </li>
 <li>
     <div>Реализовать некоторую сущность, которая умеет искать нужный фильм для пользователя</div>
     <pre>
var manager = {};

manager.findByFilmName = function (film) {
    /*бизнес лапша*/
    return /*..*/;
}

manager.sortByUserPosition = function (film) {
    /*бизнес лапша*/
    return /*..*/;
}
     </pre>
    Мощность функционала зависит только от вас. <br/>
    Совет. Было бы круто если было бы можно писать код в таком стиле:<br/>
<pre>
collection
   .findByFilmName(name)
   .sortByUserPosition()
   .getTop(10);
</pre>
 </li>
 
 <li>
     <div>Тесты. А точнее, примеры использования.</div>
     На следующем занятии я научу вас писать тесты:
     <ul>
      <li>Браузерные</li>
      <li>Консольные</li>
     </ul>
 </li>
</ol>
