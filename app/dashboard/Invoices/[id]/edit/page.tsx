import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
 
export default async function Page(props: { params: Promise<{ id: string }> }) {
  console.log('請求画面呼び出し');
  console.log('サーバーアクション：DBからオブジェクトデータを取得')
    const params = await props.params;
    const id = params.id;
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
      ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/Invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/Invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
       {/* Form　で　export default function EditInvoiceFormを呼び出ししている。 
        export default を使った関数やコンポーネントをインポートするときは、インポートする側の名前は自由に決められる という特性がある。*/}
    </main>
  );
}