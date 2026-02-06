import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { RegionalOperations } from '@/pages/dashboard/RegionalOperations';
import { SupplyChain } from '@/pages/dashboard/SupplyChain';
import { Circularity } from '@/pages/dashboard/Circularity';
import { Products } from '@/pages/dashboard/Products';
import { RAndD } from '@/pages/dashboard/RAndD';
import { Compliance } from '@/pages/dashboard/Compliance';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<RegionalOperations />} />
          <Route path="products" element={<Products />} />
          <Route path="supply-chain" element={<SupplyChain />} />
          <Route path="circularity" element={<Circularity />} />
          <Route path="r-and-d" element={<RAndD />} />
          <Route path="compliance" element={<Compliance />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
