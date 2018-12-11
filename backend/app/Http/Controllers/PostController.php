<?php

namespace App\Http\Controllers;

use App\Post;
use App\Topic;
use App\Http\Resources\Post as PostResource;
use App\Http\Requests\StorePostRequest;

class PostController extends Controller
{
    public function store(StorePostRequest $request, Topic $topic)
    {
        $post = new Post;
        $post->body = $request->body;
        $post->user()->associate($request->user());

        $topic->posts()->save($post);
        return new PostResource($post);
    }
}
