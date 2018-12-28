<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class News extends Model
{

    // protected $table = "news";
    // protected $connection = "mysql";

    /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = [
        'title', 'description', 'content',
    ];

    protected $appends = ["uri", "url", "picture_url", "content_html", "description_html"];

    public $timestamps = true;

    public function getPictureUrlAttribute()
    {

        return Storage::url(pathinfo($this->picture, PATHINFO_BASENAME));
    }

    public function setTitleAttribute($value)
    {

        $this->attributes["title"] = $value;
        $this->attributes["slug"] = str_slug($value);

    }

    public function getContentHtmlAttribute()
    {
        return $this->htmlize($this->content);
    }

    public function getDescriptionHtmlAttribute()
    {
        return $this->htmlize($this->description);
    }

    public function getCreatedDateAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    public function getUrlAttribute()
    {
        return route("news.show", $this->slug);
    }

    public function getUriAttribute()
    {
        return ltrim(route("news.show", $this->slug), config("app.url"));
    }

    private function htmlize($value)
    {
        return \Parsedown::instance()->text($value);
    }

}
