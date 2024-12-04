<form action="{{route('user.create')}}" method="POST">
    @csrf
    <input type="text" name="name">
    <input type="submit" value="Submit">
</form>