@extends('layouts.app')

@section('content')
    <!-- Hero Section -->
    @include('components.hero')

    <!-- Services Capabilities -->
    @include('components.services')

    <!-- About DevTZ (Mission, Vision, Values, What We Do) -->
    @include('components.about')

    <!-- Development Process & Why Choose DevTZ -->
    @include('components.process')

    <!-- Case Studies & Portfolio Projects -->
    @include('components.projects')

    <!-- Developer Activities & Community Events -->
    @include('components.activities')

    <!-- Engineering Team -->
    @include('components.team')


    <!-- Hire Us / Start Project Request -->
    @include('components.hire-us')

    <!-- Contact Information & Inquiry -->
    @include('components.contact')

    <!-- Interactive Modals -->
    @include('components.project-modal')
@endsection
