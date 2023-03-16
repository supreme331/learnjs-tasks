// Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub,
// запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.
// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.

// Важные детали:
// На каждого пользователя должен приходиться один запрос fetch.
// Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
// Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет,
// то функция должна возвращать null в массиве результатов.


// Решение

async function getUsers(names) {
    const jobs = [];

    for (let i = 0; i < names.length; i++) {
        let job = fetch(`https://api.github.com/users/${names[i]}`).then(res => {
            if (res.status === 200) return res.json();
            if (res.status !== 200) return null;
        }).catch(() => null);

        jobs.push(job);
    }

    return await Promise.all(jobs);
}

async function checkResult() {
    const users = await getUsers(['iliakan', 'remy', 'no.such.users']);

    console.log('iliakan', users[0].login); // 'iliakan'
    console.log('remy', users[1].login); // 'remy'
    console.log('null', users[2]); // null
}

checkResult();