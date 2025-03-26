import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { About, Gallery, Home, ProductDetail, Products } from './pages';
import { Layout } from './components';
import { PhotoProvider } from 'react-photo-view';

function Routes() {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 500,
            easing: 'ease-out-sine',
        });
    }, []);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/produtos',
                    element: <Products />,
                },
                {
                    path: '/produtos/:product',
                    element: <ProductDetail />,
                },
                {
                    path: '/galeria',
                    element: <Gallery />
                },
                {
                    path: '/sobre',
                    element: <About />,
                },
            ],
        },
        {
            path: '*',
            element: <div>erro</div>,
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Routes;
