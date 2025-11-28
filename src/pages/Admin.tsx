import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const users = [
  { id: 1, name: 'Jina Mtu', email: 'jina@akili.io', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Sana Wanjala', email: 'sana@akili.io', role: 'User', status: 'Active' },
  { id: 3, name: 'Baraka Chumo', email: 'baraka@akili.io', role: 'User', status: 'Invited' },
];

export default function Admin() {
  return (
    <div>
        <h1 className='text-lg font-semibold md:text-2xl mb-4'>Admin Panel</h1>
        <Card>
            <CardHeader>
                <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map(user => (
                            <TableRow key={user.id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell><Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>{user.status}</Badge></TableCell>
                                <TableCell>
                                    <Button variant='outline' size='sm'>Edit</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
  );
}
