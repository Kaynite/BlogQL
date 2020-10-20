<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostsController extends Controller
{
	public function FunctionName($value='')
	{
		Topic::get();
	}
}
