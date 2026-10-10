<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'client_name',
        'category',
        'tagline',
        'summary',
        'challenge',
        'solution',
        'banner_image',
        'screenshots',
        'live_url',
        'github_url',
        'tech_stack',
        'order',
        'is_featured',
    ];

    protected $casts = [
        'screenshots' => 'array',
        'tech_stack' => 'array',
        'is_featured' => 'boolean',
    ];

    public function metrics()
    {
        return $this->hasMany(ProjectMetric::class)->orderBy('order', 'asc');
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true)->orderBy('order', 'asc');
    }
}

