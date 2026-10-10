<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Service;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    /**
     * Display the main portfolio page.
     */
    public function index()
    {
        try {
            $services = Service::featured()->get();
        } catch (\Exception $e) {
            $services = collect();
        }

        try {
            $projects = Project::with('metrics')->featured()->get();
        } catch (\Exception $e) {
            $projects = collect();
        }

        // Fallback default services if database empty
        if ($services->isEmpty()) {
            $services = collect([
                (object)[
                    'id' => 1,
                    'title' => 'Enterprise Software',
                    'slug' => 'enterprise-software',
                    'tagline' => 'ERP, CRM & Business Management Systems',
                    'description' => 'Custom enterprise solutions including ERP, CRM, and business management systems.',
                    'icon' => 'globe',
                    'features' => ['ERP Systems', 'CRM Solutions', 'Business Intelligence', 'Workflow Automation'],
                    'tech_stack' => ['Laravel', 'React', 'PostgreSQL', 'Docker'],
                    'order' => 1,
                ],
                (object)[
                    'id' => 2,
                    'title' => 'Web Development',
                    'slug' => 'web-development',
                    'tagline' => 'Modern & Responsive Web Applications',
                    'description' => 'Modern, responsive websites and web applications built with cutting-edge technology.',
                    'icon' => 'network',
                    'features' => ['Custom Web Apps', 'E-commerce', 'CMS Solutions', 'API Development'],
                    'tech_stack' => ['Vue 3', 'React', 'Tailwind CSS', 'Laravel'],
                    'order' => 2,
                ],
                (object)[
                    'id' => 3,
                    'title' => 'Mobile Applications',
                    'slug' => 'mobile-applications',
                    'tagline' => 'iOS & Android Native & Cross-Platform Apps',
                    'description' => 'Native and cross-platform mobile apps for iOS and Android devices.',
                    'icon' => 'smartphone',
                    'features' => ['iOS Apps', 'Android Apps', 'Cross-platform', 'App Maintenance'],
                    'tech_stack' => ['Flutter', 'React Native', 'iOS', 'Android'],
                    'order' => 3,
                ],
                (object)[
                    'id' => 4,
                    'title' => 'Automation Solutions',
                    'slug' => 'automation-solutions',
                    'tagline' => 'Intelligent RPA & Workflow Automation',
                    'description' => 'Streamline your operations with intelligent automation and RPA solutions.',
                    'icon' => 'cpu',
                    'features' => ['Process Automation', 'RPA Implementation', 'Data Pipelines', 'System Integration'],
                    'tech_stack' => ['Python', 'Node.js', 'RPA', 'Zapier'],
                    'order' => 4,
                ],
                (object)[
                    'id' => 5,
                    'title' => 'Custom Software',
                    'slug' => 'custom-software',
                    'tagline' => 'Tailored Software Solutions for Unique Needs',
                    'description' => 'Tailored software solutions designed specifically for your unique business requirements.',
                    'icon' => 'cloud',
                    'features' => ['Desktop Apps', 'Cloud Solutions', 'SaaS Products', 'Legacy Modernization'],
                    'tech_stack' => ['Cloud', 'SaaS', 'Microservices', 'REST API'],
                    'order' => 5,
                ],
                (object)[
                    'id' => 6,
                    'title' => 'Security & Compliance',
                    'slug' => 'security-compliance',
                    'tagline' => 'Robust Security & Data Protection',
                    'description' => 'Robust security solutions to protect your digital assets and ensure compliance.',
                    'icon' => 'shield-check',
                    'features' => ['Security Audits', 'Data Protection', 'Compliance Consulting', 'Penetration Testing'],
                    'tech_stack' => ['Security Audits', 'SSL', 'OAuth2', 'Encryption'],
                    'order' => 6,
                ],
            ]);
        }

        return view('portfolio', compact('services', 'projects'));
    }
}

