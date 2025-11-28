import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Settings() {
  return (
    <div>
      <h1 className='text-lg font-semibold md:text-2xl mb-4'>Settings</h1>
      <Tabs defaultValue='profile'>
        <TabsList>
          <TabsTrigger value='profile'>Profile</TabsTrigger>
          <TabsTrigger value='organization'>Organization</TabsTrigger>
          <TabsTrigger value='billing'>Billing</TabsTrigger>
        </TabsList>
        <TabsContent value='profile'>
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
        <TabsContent value='organization'>
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
        <TabsContent value='billing'>
           <Card>
            <CardHeader>
              <CardTitle>Billing</CardTitle>
              <CardDescription>Manage your billing and subscription.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
                <p>You are currently on the <strong>Free Plan</strong>.</p>
                <Button>Upgrade to Pro</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
