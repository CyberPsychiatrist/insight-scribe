import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Individual',
    price: 'Free',
    features: [
      'Dashboard access',
      'File uploads',
      'AI reports',
      'Visualizations',
      'Shareable public links',
    ],
    cta: 'Current Plan',
    current: true,
  },
  {
    name: 'Business',
    price: '$49/mo',
    features: [
      'All Individual features',
      'Team management',
      'Database integrations',
      'Shared dashboards',
      'Role-based permissions',
      'Auto updates',
    ],
    cta: 'Upgrade',
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: [
      'Everything in Business',
      'Custom integrations',
      'Dedicated support',
      'Onboarding services',
      'Custom connections',
    ],
    cta: 'Contact Sales',
  },
];

export default function Settings() {
  return (
    <div>
      <h1 className='text-xl font-semibold md:text-2xl mb-4'>Settings</h1>
      <Tabs defaultValue='profile' className='w-full'>
        <div className='overflow-x-auto'>
          <TabsList className='inline-flex w-full sm:w-auto'>
            <TabsTrigger value='profile'>Profile</TabsTrigger>
            <TabsTrigger value='organization'>Organization</TabsTrigger>
            <TabsTrigger value='billing'>Billing</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value='profile' className='mt-4'>
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Manage your personal account settings.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' defaultValue='Jina Mtu' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' type='email' defaultValue='m@example.com' />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='organization' className='mt-4'>
          <Card>
            <CardHeader>
              <CardTitle>Organization</CardTitle>
              <CardDescription>Manage your organization settings.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
               <div className='space-y-2'>
                <Label htmlFor='org-name'>Organization Name</Label>
                <Input id='org-name' defaultValue='Akili Inc.' />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='billing' className='mt-4'>
          <Card>
            <CardHeader>
              <CardTitle>Billing</CardTitle>
              <CardDescription>Manage your billing and subscription. You are currently on the <strong>Individual Plan</strong>.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {plans.map((plan) => (
                  <Card key={plan.name} className={`flex flex-col ${plan.current ? 'border-primary' : ''}`}>
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription className='text-4xl font-bold'>{plan.price}</CardDescription>
                    </CardHeader>
                    <CardContent className='flex-grow space-y-4'>
                      <ul className='space-y-2'>
                        {plan.features.map((feature) => (
                          <li key={feature} className='flex items-center'>
                            <Check className='h-4 w-4 text-green-500 mr-2' />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <div className='p-6 pt-0'>
                       <Button className='w-full' disabled={plan.current}>{plan.cta}</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}