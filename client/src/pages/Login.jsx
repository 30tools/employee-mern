import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import SEO from '../components/SEO'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", { email, password })
            if (response.data.success) {
                login(response.data.user)
                localStorage.setItem("token", response.data.token)
                if (response.data.user.role === "admin") {
                    navigate('/admin-dashboard')
                } else {
                    navigate('/employee-dashboard')
                }
            }
        } catch (err) {
            if (err.response && !err.response.data.success) {
                setError(err.response.data.error)
            } else {
                setError("Server Error")
            }
        }
    }

    return (
        <div className='flex flex-col items-center h-screen justify-center bg-gray-100 dark:bg-gray-900'>
            <SEO title="Login - Employee Management" description="Login to the Employee Management System" />
            <div className='mb-6 text-center'>
                <h2 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>Employee Management</h2>
                <p className='text-sm text-muted-foreground mt-2'>Sign in to your account</p>
            </div>

            <Card className="w-[400px] shadow-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center">Login</CardTitle>
                    <CardDescription className="text-center">Enter your credentials to access the system.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    {error && <div className='bg-red-50 text-red-500 text-sm p-3 rounded-md border border-red-200'>{error}</div>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="admin@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="******"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <Checkbox
                                id="remember"
                                onCheckedChange={(checked) => console.log(checked)}
                            />
                            <Label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Remember me
                            </Label>
                        </div>
                        <Button className="w-full mt-4" type="submit">Login</Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <a href="#" className='text-sm text-primary hover:underline'>Forgot password?</a>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login
