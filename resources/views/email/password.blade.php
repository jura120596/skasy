@if ($new)
    <h1>Регистарция в приложении</h1>
    <h3>Благодарим за регистрацию в приложении {{config('app.name')}}. Теперь вам доступен функционал оформления заявок.</h3>
    <br/>
    <h5>Ваш пароль для входа в приложение: <bold>{{' '. $password}}</bold></h5>
@else
    <h1>Восстановление пароля</h1>
    <h3>В приложении {{config('app.name')}} пароль был изменен.</h3>
    <br/>
    <h5>Новый пароль: <bold>{{' '. $password}}</bold></h5>
@endif