<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            [
                'title' => 'Enterprise Software',
                'slug' => 'enterprise-software',
                'tagline' => 'ERP, CRM & Business Management Systems',
                'description' => 'Custom enterprise solutions including ERP, CRM, and business management systems engineered for scaling organizations.',
                'icon' => 'globe',
                'features' => [
                    'ERP Systems',
                    'CRM Solutions',
                    'Business Intelligence',
                    'Workflow Automation'
                ],
                'tech_stack' => ['Laravel', 'React', 'PostgreSQL', 'Docker'],
                'order' => 1,
                'is_featured' => true,
            ],
            [
                'title' => 'Web Development',
                'slug' => 'web-development',
                'tagline' => 'Modern & Responsive Web Applications',
                'description' => 'Modern, responsive websites and web applications built with cutting-edge technologies and optimized for peak speed.',
                'icon' => 'network',
                'features' => [
                    'Custom Web Apps',
                    'E-commerce Platforms',
                    'CMS Solutions',
                    'API Development'
                ],
                'tech_stack' => ['Vue 3', 'React', 'Tailwind CSS', 'Laravel'],
                'order' => 2,
                'is_featured' => true,
            ],
            [
                'title' => 'Mobile Applications',
                'slug' => 'mobile-applications',
                'tagline' => 'iOS & Android Native & Cross-Platform Apps',
                'description' => 'Native and cross-platform mobile apps for iOS and Android devices with intuitive user experiences and offline capabilities.',
                'icon' => 'smartphone',
                'features' => [
                    'iOS Applications',
                    'Android Applications',
                    'Cross-platform Solutions',
                    'App Maintenance & Support'
                ],
                'tech_stack' => ['Flutter', 'React Native', 'iOS', 'Android'],
                'order' => 3,
                'is_featured' => true,
            ],
            [
                'title' => 'Automation Solutions',
                'slug' => 'automation-solutions',
                'tagline' => 'Intelligent RPA & Workflow Automation',
                'description' => 'Streamline your business operations with intelligent automation, robotic process automation (RPA), and real-time data pipelines.',
                'icon' => 'cpu',
                'features' => [
                    'Process Automation',
                    'RPA Implementation',
                    'Data Pipelines',
                    'System Integration'
                ],
                'tech_stack' => ['Python', 'Node.js', 'RPA', 'Zapier'],
                'order' => 4,
                'is_featured' => true,
            ],
            [
                'title' => 'Custom Software',
                'slug' => 'custom-software',
                'tagline' => 'Tailored Software Solutions for Unique Needs',
                'description' => 'Tailored software solutions designed specifically for your unique business requirements and digital growth strategy.',
                'icon' => 'cloud',
                'features' => [
                    'Desktop Applications',
                    'Cloud Solutions',
                    'SaaS Products',
                    'Legacy Modernization'
                ],
                'tech_stack' => ['Cloud', 'SaaS', 'Microservices', 'REST API'],
                'order' => 5,
                'is_featured' => true,
            ],
            [
                'title' => 'Security & Compliance',
                'slug' => 'security-compliance',
                'tagline' => 'Robust Security & Data Protection',
                'description' => 'Robust security solutions to protect your digital assets, ensure regulatory compliance, and safeguard critical business infrastructure.',
                'icon' => 'shield-check',
                'features' => [
                    'Security Audits',
                    'Data Protection',
                    'Compliance Consulting',
                    'Penetration Testing'
                ],
                'tech_stack' => ['Security Audits', 'SSL', 'OAuth2', 'Encryption'],
                'order' => 6,
                'is_featured' => true,
            ],
        ];

        foreach ($services as $service) {
            Service::updateOrCreate(['slug' => $service['slug']], $service);
        }
    }
}
