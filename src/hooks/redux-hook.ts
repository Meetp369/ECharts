
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../redux/store'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
