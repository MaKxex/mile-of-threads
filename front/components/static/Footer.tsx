

export default function Footer() {
    return (

    <footer className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 p-4 border-t">
            <div>
            <h4 className="font-bold">Про нас</h4>
            <ul className="space-y-2">
                <li>Кто мы?</li>
                <li>Хочешь подзаработать?</li>
            </ul>
            </div>
            <div>
            <h4 className="font-bold">Информация</h4>
            <ul className="space-y-2">
                <li>Что там с доставкой?</li>
                <li>Не понравилось? Возврат!</li>
                <li>Лицензионное соглашение</li>
            </ul>
            </div>
            <div>
            <h4 className="font-bold">Для любимых клиентов</h4>
            <ul className="space-y-2">
                <li>Хочу скидочку</li>
                <li>Вопрос - ответ</li>
            </ul>
            </div>
            <div>
            <h4 className="font-bold">Смотри, как мы развиваемся!</h4>
            <ul className="space-y-2">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>TikTok</li>
            </ul>
            </div>
    </footer>
    );
}
