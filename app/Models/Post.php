<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
	public function topic()
	{
		return $this->belongsTo(Topic::class);
	}

	public function author()
	{
		return $this->belongsTo(User::class, 'author_id');
	}
}
